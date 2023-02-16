import styled from "styled-components";

const ResumeStyle = styled.section`
display: flex;
justify-content: center;
align-items: center;
`;

const ResumeTitle = styled.h2`
color: #d97706;
font-size: 30px;
font-weight: bold;
`;

const Button = styled.button`
background-color: #d97706;
border-radius: 5px;
color: white;
font-weight: bold;
padding: 5px;
`;
export default function Resume() {
    return (
        <ResumeStyle>
            <ResumeTitle>
                Resume
            </ResumeTitle>
            <div>
            <a href="https://drive.google.com/file/d/1zIiod37_IGk8Yun8CkTzPfB3k2LfVI5q/view?usp=sharing">
                <Button type="button">
                    View Resume
                </Button>
            </a>
            </div>
        </ResumeStyle>
    )
}