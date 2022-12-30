import { Component } from 'react';
import PropTypes from 'prop-types';

export type ScriptLoaderProps = {
    delayMs?: number;
    onCreate?: () => void;
    onError?:     (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
    onSuccess?: () => void;
    onLoad?: () => void;
    src: string;
    [key: string]: any;
}
export default class ScriptLoader extends Component<ScriptLoaderProps, {
    delayMs: number;
    src: string;
    timeout: NodeJS.Timeout | null;
}> {
    



   constructor(props: ScriptLoaderProps) {
        super(props);

        this.state = {
            delayMs: props.delayMs || 0,
            src: props.src,
            timeout: null
        };
        
        
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this._appendScript = this._appendScript.bind(this);
        this.render = this.render.bind(this);
}
    
    componentDidMount() {
        this.setState( {
            timeout: setTimeout(this._appendScript, this.state.delayMs)
        });
    }
    
    componentWillUnmount() {
        if(this.state.timeout) {
            clearTimeout(this.state.timeout);
        };
    }

    _appendScript = () => {
        const { 
            onCreate, 
            onLoad,
            onError,
            delayMs,
            src, 
            ...otherProps
        } = this.props;

        const script = document.createElement('script');
        script.src = src;

        // Add custom attributes
        for (const [attr, value] of Object.entries(otherProps)) {

            if (attr === 'onCreate' || attr === 'onLoad' || attr === 'onError' || attr==='onSuccess') {
                continue;
            }  
            script.setAttribute(attr, value as any);
        }

        script.onload = onLoad || null;
        script.onerror = onError || null;
        document.body.appendChild(script);

        if(onCreate) {
            onCreate();
        }
    };

    render() {
        return null;
    }
}

const defaultScriptLoader = {
    delayMs: 0,
    onCreate: Function.prototype,
    onError: (e: ErrorEvent) => {
        throw new URIError(`The script ${e.target} is not accessible`);
    },
    onLoad: Function.prototype
};


