import React from 'react';
import moment from 'moment';
import classes from "./PostItem.module.css";
import {convertFromRaw} from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const PostItem = props => {
    const convert = (storedState) => {
        return stateToHTML(convertFromRaw(storedState));
    };

    return (
        <div className="card mt-5">
        <span className="card-header font-weight-light">
          <i className="fa fa-user-circle fa-2x"></i>
          <div className={classes.admin}>Admin</div>
          <div className={classes.date}>
              {moment(props.date).format("MMM DD, YYYY")}
              <div className={classes.action}><i class="fa fa-ellipsis-v"></i></div>
          </div>
        </span>
        <div className="card-body">
          <div className={classes.title}>{props.title}</div>
          <div className={classes.category}>
            <i class="fa fa-tags"></i>
              {props.category}
          </div>
          <div className={classes.content}><div dangerouslySetInnerHTML={{ __html: convert(props.body) }} /></div>
        </div>
        </div>
    );
}

export default PostItem