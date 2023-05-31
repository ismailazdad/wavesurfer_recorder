import React, {Fragment, useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrow from '@material-ui/icons/PlayArrow';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

interface CustomProps {
    playing?: boolean | string;
    isFinish?: boolean | string;
}

const StyledFab = styled(Fab)<CustomProps>`
  position: relative;
  background-color: ${props => (props.playing ? '#272727' : '#ff3466')};
  color: white;
  opacity: 1;
  margin: 12px;
  transition: all 0.2s;
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
    background-color: ${props => (props.playing ? '#272727' : '#ff3466')};
    opacity: 0.9;
  }
`;
const PlayButton: React.FC<any> = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <Fragment>
            {isPlaying && !props.isFinish ? (
                <Tooltip title="Stop play Recording" aria-label="record" placement="right">
                  <span>
                  <StyledFab
                      onClick={() => {
                          setIsPlaying(false);
                          props.StopPlayRecording();
                      }}
                      color="secondary"
                      aria-label="record"
                  >
                      <div className="pulse-bg"/>
                      <StopIcon/>
                  </StyledFab>
                  </span>
                </Tooltip>
            ) : (
                <Tooltip title="Play Recording" aria-label="record" placement="right">
                  <span>
                  <StyledFab
                      playing="true"
                      disabled={props.disabled}
                      onClick={() => {
                          setIsPlaying(true);
                          props.onClick();
                      }}
                      color="secondary"
                      aria-label="record"
                  >
                      <PlayArrow/>
                  </StyledFab>
                  </span>
                </Tooltip>
            )}
        </Fragment>
    );
};

export default PlayButton;