import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import ui from "utils/ui";
import UploadProduct from "components/UploadProduct";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: ${props => props.theme.maxCardWidth};
  position: fixed;
  bottom: 20px;
`;
const theme = createMuiTheme({
  palette: {
    primary: { main: "#17202E" },
    secondary: { main: "#17202E" }
  }
});

const StyledFab = styled(Fab)``;

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Tooltip
          title="Add"
          aria-label="add"
          onClick={() =>
            ui.showModal({
              header: "상품 등록",
              content: <UploadProduct />
            })
          }
        >
          <StyledFab color="primary">
            <AddIcon />
          </StyledFab>
        </Tooltip>
      </Container>
    </ThemeProvider>
  );
};
