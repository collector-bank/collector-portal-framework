import React from 'react';

export type NotificationType = 'cui-is-success' | 'cui-is-info' | 'cui-is-warning' | 'cui-is-danger';

interface NotificationProps {
    description: string;
    title?: string;
    hasIcon?: boolean;
    type: NotificationType;
    isOutlined?: boolean;
    actionBtnHref?: string;
    actionBtnText?: string;
    onActionCb?: Function;
    onCloseCb?: boolean;
    isClosable: boolean;
}

const getIconBy = (type: NotificationType): string => {
    switch (type) {
        case 'cui-is-success':
            return 'cui-icon-check'
        case 'cui-is-info':
            return 'cui-icon-info'
        case 'cui-is-warning':
            return 'cui-icon-warning'
        case 'cui-is-danger':
            return 'cui-icon-danger'
        default:
            return 'cui-icon-check'
    }
}

export const Notification: React.FC<NotificationProps> = ({ type, title, hasIcon= true, description, isOutlined = false, actionBtnHref, actionBtnText, isClosable, onCloseCb }) => (
    <>
        <div className={`cui-notification ${type} ${isOutlined ? "cui-is-outlined" : ""}`}>
            {hasIcon &&
                <div className="cui-notification-left">
                    <figure className={`${getIconBy(type)} cui-is-large`} />
                </div>
            }
            <div className="cui-notification-content">
                {title &&
                    <div className={"cui-title"}>{title}</div>
                }
                <p>{description}</p>
            </div>
            {actionBtnHref && actionBtnText &&
                <div className="cui-notification-right">
                    <a href={actionBtnHref} className="cui-is-link">
                        {actionBtnText}
                    </a>
                </div>
            }
            {isClosable &&
                <div className="cui-notification-close">
                    <a className="cui-closable" onClick={onCloseCb}>
                        <figure className="cui-icon-close cui-is-normal" />
                    </a>
                </div>
            }
        </div>
    </>
);
