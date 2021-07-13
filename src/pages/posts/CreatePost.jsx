import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import TextEditor from '../../components/Editor/Editor';
import classes from "./CreatePost.module.css";
import CategoryDropDown from '../../components/Buttons/CategoryDropDown';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    return (
        <>
            <Navbar />
            <div className="row mr-0 ml-0">
                <Sidebar />
                <div className="col p-4">
                    <div className="card mt-2">
                        <h5 className="card-header font-weight-heavy">New Post</h5>
                        <div className="card-body">
                            <div class="form-group">
                                <input
                                    className={classes.input}
                                    type="text"
                                    class="form-control"
                                    id="title"
                                    name="title"
                                    value={title}
                                    placeholder="Enter post title"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <TextEditor></TextEditor>
                            <div className={classes.bottomActions}>
                                <div className={classes.drop}>
                                    <CategoryDropDown></CategoryDropDown>
                                </div>
                                <button className={classes.postButton}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost
