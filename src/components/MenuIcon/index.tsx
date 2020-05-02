import React from "react";

export interface Props {
  menuIsShown: boolean;
}

export interface State {
  focusable: boolean;
}

class MenuIcon extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      focusable: true,
    };
  }

  forbiddenFocus = () => {
    this.setState({
      focusable: false,
    });
  };
  checkFocusable = (e) => {
    if (!this.state.focusable) {
      e.currentTarget.blur();
      this.setState({
        focusable: true,
      });
    }
  };
  handleTouch = (e) => {
    const target = e.currentTarget;
    setTimeout(() => {
      target.classList.remove("hover");
    }, 200);
  };
  handleMouseEnter = (e) => {
    e.currentTarget.classList.add("hover");
  };
  render() {
    const { menuIsShown } = this.props;
    return (
      <button
        type="button"
        className={"menu clickable"}
        onTouchStart={this.handleTouch}
        onMouseEnter={this.handleMouseEnter}
        onMouseDown={this.forbiddenFocus}
        onFocus={this.checkFocusable}
      >
        {menuIsShown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#1B1B1B"
              fillRule="evenodd"
              d="M18.73 4L20 5.27l-6.731 6.729L20 18.731 18.73 20 12 13.269 5.27 20 4 18.73 10.731 12 4 5.27 5.27 4 12 10.73 18.73 4z"
            />
          </svg>
        ) : (
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <g
              id="graphic/icon/menu/enabled"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M19,15 L19,17 L1,17 L1,15 L19,15 Z M1,9 L19,9 L19,11 L1,11 L1,9 Z M19,3 L19,5 L1,5 L1,3 L19,3 Z"
                id="形状结合"
                fill="#1B1B1B"
              />
            </g>
          </svg>
        )}
      </button>
    );
  }
}

export default MenuIcon;
