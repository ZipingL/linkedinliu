import  React from 'react';


declare module '@gumgum/react-script-tag' {
    export default interface ScriptProps {
        src: string;
        type?: string;
        async?: boolean;
        defer?: boolean;
        onLoad?: () => void;
        onError?: () => void;
    }

}

export default class Script extends React.Component<ScriptProps> {}