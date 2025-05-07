// import styled from "@emotion/styled";
import Logo from "../../../../assets/Logo.svg";

const LogoButton = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default LogoButton;

// const Logo = styled.img`
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;

//   &:hover {
//     border-radius: 50%; /* 원형 버튼 */
//   }

//   width: 2rem; /* 아이콘 크기 조정 */
//   height: auto;
// `;
