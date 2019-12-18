import React, { Component } from "react";
import { connect } from "react-redux";
import '../css/styles.css'
import uuid from 'uuid/v1';

export class History extends Component {
componentDidMount() {
    this.addClassToBody()
}

    addClassToBody(){
        console.log(`theme`, this.props.theme);
        console.log('conditionallllll',this.props.theme || this.props.theme === "");
        console.log('HISTORU PROPS',this.props.theme  );
        console.log('historyprops ===empty', this.props.theme === "");
        let body = document.body;
        if (this.props.theme || this.props.theme === ""){
        
            body.classList.add(this.props.theme || this.props.theme === ""? "light": "dark");
            console.log('BBBBBODY', body);
        }else if (typeof this.props.theme === 'boolean'){
            body.classList.add(this.props.theme || this.props.theme === ""? "light": "dark");
        }
     
    }
  renderList() {
      if(this.props.history.length > 0){
          console.log(this.props.history.length);
        return this.props.history.map(history => {
            return (
              <div key={uuid()}>
                <div className="history-list">{history}</div>
              </div>
            );
          });
      }
    
  }
  render() {
    let { history, theme } = this.props;
    return (
        
        // <div className={theme || theme === "" ? "light" : "dark"}>
        <div>
            {this.addClassToBody()}
        {history.length === 0 ? (
           <div className="warning"> You haven't seen any videos yet, please come back when you see any</div>
        ) : (
          this.renderList()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { history: state.history, theme: state.theme };
};
export default connect(mapStateToProps, null)(History);
