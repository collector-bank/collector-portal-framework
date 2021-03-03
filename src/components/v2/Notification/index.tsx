import React from 'react';

export type NotificationType = 'cui-is-success' | 'cui-is-info' | 'cui-is-warning' | 'cui-is-danger';

interface NotificationProps {
    description: string;
    title?: string;
    hasIcon?: boolean;
    type: NotificationType;
    isOutlined?: boolean;
    actionButtonHref?: string;
    actionButtonText?: string;
    onCloseCallback?: Function;
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

export const Notification: React.FC<NotificationProps> = ({ type, title, hasIcon= true, description, isOutlined = false, actionButtonHref, actionButtonText, isClosable, onCloseCallback }) => (
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
            {actionButtonHref && actionButtonText &&
                <div className="cui-notification-right">
                    <a href={actionButtonHref} className="cui-is-link">
                        {actionButtonText}
                    </a>
                </div>
            }
            {isClosable &&
                <div className="cui-notification-close">
                    <a className="cui-closable" onClick={onCloseCallback}>
                        <figure className="cui-icon-close cui-is-normal" />
                    </a>
                </div>
            }
        </div>
    </>
);
