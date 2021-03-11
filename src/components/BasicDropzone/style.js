import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';

const StyledBasicDropzone = styled.section`
  font-size: 1rem;
  padding: 0.25rem 0.25rem;
  width: 100%;
  position: relative;

  .dropzone {
    background: ${palette.unselected};
    margin: 1rem 0;
    padding: 0.3rem 0;
    cursor: pointer;
    text-align: center;
    border-radius: 6px;
    border: solid 1px #dde0e7;
    background-color: #ffffff;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #303030;

    &:hover {
      background: ${palette.common};
    }
  }

  .buttonLabel {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    color: rgb(43, 43, 43);
  }

  .desc,
  .attachedNameLabel {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgb(117, 117, 117);
  }

  .attachedName {
    font-size: 0.785rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: right;
    color: #303030;

    ul {
      list-style-type: none;
    }
  }
`;

const Label = styled.p`
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: rgb(43, 43, 43);
`;

export { StyledBasicDropzone, Label };
