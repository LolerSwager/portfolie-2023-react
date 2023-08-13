import { styled } from "styled-components"

export default function Table(){
    return(
        <StyledTable>
            <HeadTable>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Button</th>
                </tr>
            </HeadTable>
            <BodyTable>
                <tr>
                    <td>Key name</td>
                    <td>10 KB</td>
                    <td><button>Clean</button></td>
                </tr>
                <tr>
                    <td>Key name</td>
                    <td>100 KB</td>
                    <td><button>Clean</button></td>
                </tr>
                <tr>
                    <td>Key name lolerswager.com</td>
                    <td>10 KB</td>
                    <td><button>Clean</button></td>
                </tr>
                <tr>
                    <td>Key name</td>
                    <td>10 KB</td>
                    <td><button>Clean</button></td>
                </tr>
                <tr>
                    <td>Key name</td>
                    <td>10 KB</td>
                    <td><button>Clean</button></td>
                </tr>
            </BodyTable>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    display: grid;
    flex: 1;
    grid-template-columns: 
        minmax(150px, 1.75fr)
        minmax(50px, 1fr)
        minmax(50px, auto);

    width: auto;

    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;

    thead,
    tbody,
    tr {
        display: contents;
    }

    th {
        background-color: var(--activeColor);
        border: 2px solid var(--activeColor);
    }

`

const HeadTable = styled.thead`
    background-color: var(--activeColor);
    border: 2px solid var(--activeColor);
    tr{
        th{
            padding: .6rem 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            font-weight: 700;
            text-align: left;
        }
    }
`

const BodyTable = styled.tbody`
    border: 2px solid var(--activeColor);
    overflow: auto; 
    tr{
        background-color: var(--wrapperColor);
        
        td{
            padding: .6rem 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &:nth-child(even) td {
            background: rgba(0, 0, 0, 0.25);
        }
        &:hover{
            background-color: var(--backGroundColor);
        }
    }
    
    button{
        color: #000;
        padding: .2rem .3rem;
        border-radius: calc(var(--borderRadius)/2);
        border: none;
        font-weight: 500;
        &:hover{
            color: red;
        }
    }
`