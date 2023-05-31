import React, {Fragment} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import GetAppIcon from '@material-ui/icons/GetApp';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';


const StyledFab = styled(Fab)`
  position: relative;
  background-color: #272727;
  color: white;
  opacity: 1;
  margin: 12px;
  .pulse-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ff3466;
    border-radius: 100%;
    opacity: 0.5;
    z-index: -10;
  }
  :hover {
    background-color: #272727;
    opacity: 0.9;
  }
`;
const DownloadButton: React.FC<any> = (props) => {
    return (
        <Fragment>
            <Tooltip title='Download Recording' aria-label='download' placement='right'>
                  <span>
                  <StyledFab
                      disabled={props.disabled}
                      onClick={() => {
                          props.downloadRecording();
                      }}
                      color='secondary'
                      aria-label='record'
                  >
                      <div className='pulse-bg'/>
                      <GetAppIcon/>
                  </StyledFab>
                  </span>
            </Tooltip>
        </Fragment>
    );
};
export default DownloadButton;