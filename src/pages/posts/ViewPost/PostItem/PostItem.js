import React from 'react';
import moment from 'moment';
import classes from "./PostItem.module.css";
import {convertFromRaw} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import axios from '../../../../axios';
import { confirmAlert } from 'react-confirm-alert';
import { setUpdate } from '../../../../slices/postSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const PostItem = props => {
    const alertUi = useAlert();
    const dispatch = useDispatch();

    const convert = (storedState) => {
        return stateToHTML(convertFromRaw(storedState));
    };

    const deleteHandler = () => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure to do this?',
          buttons: [
            {
              label: 'Yes',
              onClick: async () => {
                axios.delete(`/posts/${props.uid}`).then(() => {
                  alertUi.success('Deleted Successfully!');
                  dispatch(setUpdate(true));
                }).catch((e) => {
                  alertUi.error('Something is wrong!');
                })
              }
            },
            {
              label: 'No',
            }
          ]
        });
    }
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
            <i className="fa fa-tags"></i>
              {props.category}
          </div>
          <div className={classes.content}><div dangerouslySetInnerHTML={{ __html: convert(props.body) }} /></div>
        </div>
        </div>
    );
}

export default PostItem