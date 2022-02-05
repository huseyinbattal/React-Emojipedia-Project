import React from "react";



class Entry extends React.Component {
  render() {
  return (
    <div className="term">
      <div className="dt">
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {this.props.emoji}
        </span>
        <span>{this.props.name}</span>
      </div>
      <div className="dd">
        {this.props.description}
      </div>
    </div>
  );
}
  }
export default Entry;
