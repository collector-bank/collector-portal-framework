import React from 'react';

export type NotificationType = 'cui-is-success' | 'cui-is-info' | 'cui-is-warning' | 'cui-is-danger';

interface NotificationProps {
    type: NotificationType;
    title?: string;
    description: string;
    hasIcon?: boolean;
    isOutlined?: boolean;
    linkHref?: string;
    linkText?: string;
    onClose?: () => void;
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

export const Notification: React.FC<NotificationProps> = ({ type, title, description, hasIcon = true, isOutlined = false, linkHref, linkText, onClose }) => (
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
            {linkHref && linkText &&
                <div className="cui-notification-right">
                    <a href={linkHref} className="cui-is-link">
                        {linkText}
                    </a>
                </div>
            }
            {onClose &&
                <div className="cui-notification-close">
                    <a className="cui-closable" onClick={onClose}>
                        <figure className="cui-icon-close cui-is-normal" />
                    </a>
                </div>
            }
        </div>
    </>
);
