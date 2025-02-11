import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Duolingo = () => {
    const [data, setData] = useState({ users: [] });
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("lolerswager");
    const [debouncedUsername, setDebouncedUsername] = useState(username);
    const [doulingoStats, setDoulingoStats] = useState(false);

    const duolingoUrl = `https://www.duolingo.com/2017-06-30/users?username=${username}&fields=streak,streakData{currentStreak,previousStreak}}`;

    const HandleUsername = (event) => {
        setUsername(event.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedUsername(username);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [username]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(duolingoUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };
        fetchData();
    }, [debouncedUsername]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data?.users?.length) {
        return <div>No data available for the username.</div>;
    }

    return (
        <StyledDuolingo onMouseOver={() => setDoulingoStats(true)} onMouseOut={() => setDoulingoStats(false)}>
            <span className="flame">
                <h3 className="streak">{data && data?.users?.[0]?.streak}</h3>
                <img src="https://d35aaqx5ub95lt.cloudfront.net/images/streakCalendar/a72349d80ba9da4368853a3446f93530.svg" alt="" />
            </span>
            {doulingoStats ? (
                <DuolingoStats>
                    <span>
                        <h4>My Duolingo</h4>
                        <a href={"https://www.duolingo.com/profile/" + username} target="_blank" title={"Åben " + username + " Duolingo"}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                        </a>
                    </span>
                    <div>
                        <input type="text" onChange={HandleUsername} value={username} />
                    </div>
                    {data &&
                        data?.users?.[0].courses.map((item) => {
                            return (
                                <li key={item.learningLanguage}>
                                    <span>
                                        <img src={"https://ardslot.com/s/" + item.learningLanguage + ".svg"} alt={item.learningLanguage} />
                                        <p>{item.title}</p>
                                    </span>
                                    <p>{item.xp} XP</p>
                                </li>
                            );
                        })}
                </DuolingoStats>
            ) : null}
        </StyledDuolingo>
    );
};

const DuolingoStats = styled.ul`
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: var(--wrapperColor);
    width: 320px;
    top: 38%;
    right: 3%;
    position: absolute;
    border-radius: 10px;
    h4 {
        font-size: 1rem;
        padding: 0 0 0 0.3rem;
    }
    span {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0px;
        a {
            .icon {
                font-size: 0.8rem;
            }
        }
    }
    div {
        input {
            color: #eee;
            font-family: "Nunito";
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            font-size: 1.2rem;
            min-width: 3.2rem;
            background-color: var(--backGroundColor);
            padding: 0.5rem;
            border-radius: 10px;
            border-color: var(--backGroundColor);
            max-width: 180px;
        }
    }
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: var(--backGroundColor);
        span {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0px;
            img {
                width: 30px;
            }
        }
    }
`;

const StyledDuolingo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 78%;
    left: 65%;
    height: 8rem;
    width: 8rem;

    font-family: "Nunito";
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 1.3rem;

    img {
        width: 7.5rem;
    }

    .streak {
        position: absolute;
        top: 40%;
        right: 25%;
        font-size: 2.2rem;
        -webkit-text-stroke: 1px orange;
    }

    .flame {
        z-index: 2;
        cursor: pointer;
    }
`;

export default Duolingo;
