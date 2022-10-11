import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Password } from "primereact/password";

const PanelDemo = () => {
    const toolbarItems = [
        {
            label: "Save",
            icon: "pi pi-check",
        },
        {
            label: "Update",
            icon: "pi pi-upload",
        },
        {
            label: "Delete",
            icon: "pi pi-trash",
        },
        {
            label: "Home Page",
            icon: "pi pi-home",
        },
    ];

    const toolbarLeftTemplate = () => {
        return (
            <>
                <Button label="New" icon="pi pi-plus" style={{ marginRight: ".5em" }} />
                <Button label="Open" icon="pi pi-folder-open" className="p-button-secondary" />

                <i className="pi pi-bars p-toolbar-separator" style={{ marginRight: ".5em" }}></i>

                <Button icon="pi pi-check" className="p-button-success" style={{ marginRight: ".5em" }} />
                <Button icon="pi pi-trash" className="p-button-warning" style={{ marginRight: ".5em" }} />
                <Button icon="pi pi-print" className="p-button-danger" />
            </>
        );
    };
    const toolbarRightTemplate = <SplitButton label="Options" icon="pi pi-check" model={toolbarItems} menuStyle={{ width: "12rem" }}></SplitButton>;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Toolbar</h5>
                    <Toolbar left={toolbarLeftTemplate} right={toolbarRightTemplate}></Toolbar>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Divider</h5>
                    <div className="grid">
                        <div className="col-5 flex align-items-center justify-content-center">
                            <div className="p-fluid">
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="username" type="text" />
                                        <label htmlFor="username">Username</label>
                                    </span>
                                </div>
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" type="password" />
                                        <label htmlFor="password">Password</label>
                                    </span>
                                </div>
                                <Button label="Login"></Button>
                            </div>
                        </div>
                        <div className="col-1">
                            <Divider layout="vertical">
                                <b>OR</b>
                            </Divider>
                        </div>
                        <div className="col-5 align-items-center justify-content-center"></div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Splitter</h5>
                    <Splitter style={{ height: "300px" }} className="mb-5">
                        <SplitterPanel size={40} minSize={10} style={{ overflow: "auto" }}>
                            <div className="col pt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </SplitterPanel>
                        <SplitterPanel size={80}>
                            <Splitter layout="vertical">
                                <SplitterPanel size={30} style={{ overflow: "auto" }}>
                                    <div className="col pt-3">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                    </div>
                                </SplitterPanel>
                                <SplitterPanel size={70} style={{ overflow: "auto" }}>
                                    <div className="col pt-3">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                        animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                    </div>
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(PanelDemo, comparisonFn);
