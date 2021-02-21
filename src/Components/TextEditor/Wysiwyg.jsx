import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {
    "entityMap":{

    },
    "blocks":[
        {
            "key":"637gr",
            "text":"Initialized from content state.",
            "type":"unstyled",
            "depth":0,
            "inlineStyleRanges":[

            ],
            "entityRanges":[

            ],
            "data":{

            }
        }
    ]
};

class Wysiwyg extends React.Component {

    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
            editorState,
            contentState,
            readOnly: false,
        };

        this.onContentStateChange = this.onContentStateChange.bind(this)
        this.onEditorStateChange = this.onEditorStateChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    onContentStateChange(contentState) {
        this.setState({
            contentState,
        });
    };
    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    };
    handleSubmit() {
        console.log(this.state.contentState)
        console.log(this.state.editorState)
    };


    render() {
        const { editorState } = this.state;
        return (
            <>
                <Editor
                    initialContentState={content}
                    editorState={editorState}
                    readOnly = {this.state.readOnly}
                    toolbarHidden = {this.state.readOnly}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onContentStateChange={this.onContentStateChange}
                    onEditorStateChange={this.onEditorStateChange}
                />
                <button onClick={this.handleSubmit}>
                    submit
                </button>
            </>
        )
    }

}

export default Wysiwyg
