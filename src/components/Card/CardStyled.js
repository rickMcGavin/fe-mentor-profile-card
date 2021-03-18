import styled from "styled-components";

const CardStyled = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  z-index: 1;

  .bg-pattern {
    border-radius: 15px 15px 0 0;
    width: 100%;
    max-height: 117px;
  }

  .image-container img {
    border: 5px solid var(--white);
    border-radius: 50%;
    width: 100%;
  }

  .info-container {
    align-items: center;
    color: var(--textLight);
    display: flex;
    font-size: 1.125rem;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    margin: 16px 0;
  }

  .info-container .name {
    color: var(--text);
    font-weight: bold;
  }

  .info-container .city {
    font-size: 0.75rem;
  }

  .social {
    border-top: 1px solid var(--gray);
    display: flex;
    justify-content: space-evenly;
    padding: 16px;
  }

  .social__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social__num {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .social__label {
    color: var(--textLight);
    font-size: 0.5rem;
  }
`;

export default CardStyled;
