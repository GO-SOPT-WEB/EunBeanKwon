import { styled } from "styled-components";
import Header from "./Header";
import SearchingBar from "./SearchingBar";

const PageLayout = (props) => {
    const {children} = props;
  return (
    <St.PageContainer>
        <Header />
        <SearchingBar />
            {children}
    </St.PageContainer>
  )
}

export default PageLayout

const St = {
    PageContainer : styled.div `
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;

        width: 100%;
        height: 100%;
    `

}