import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }

    return (
        <div>
            {!editMode &&
                <div className={styles.deactivatedEditStatus}>
                    <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div >
                    <input onChange={onStatusChange} className={styles.activatedEditStatus} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;