import React from 'react';
import moment from 'moment';
import classes from "./PostItem.module.css";
import {convertFromRaw} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { Link } from "react-router-dom";
import { firestore } from '../../../../firebase.config';

const PostItem = props => {
    const convert = (storedState) => {
        return stateToHTML(convertFromRaw(storedState));
    };

    const deleteHandler = async () => {
      try {
        await firestore.collection("posts").doc(props.uid).delete();
      } catch (e) {
        console.log(e);
      }
    };

    return (
        <div className="card mt-5">
        <span className="card-header font-weight-light">
          <i className="fa fa-user-circle fa-2x"></i>
          <div className={classes.admin}>Admin</div>
          <div className={classes.date}>
              {moment(props.date).format("MMM DD, YYYY")}
              <div className={classes.action}>
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownActionsButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                    <Link to={`create-post/${props.uid}`}>
                      <button
                        className="dropdown-item"
                      >
                        Edit
                      </button>
                      </Link>
                    <button
                      onClick={(e) => deleteHandler(e)}
                      className="dropdown-item"
                    >
                      Delete
                    </button>
                  </div>   
              </div>
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