export interface ErrnoDefinition {
    code: number;
    name: string;
    description: string;
    posixEquivalent?: string;
}

export interface SocketOptionLevel {
    level: string;
    options: Record<string, number>;
}

export interface SyscallDefinition {
    nr: number;
    nargs: number;
    return: string;
}

export declare const FreeBSD_Errno_Matrix: Record<number, ErrnoDefinition>;
export declare const SOL_SOCKET_Options: Record<string, number>;
export declare const IPPROTO_IP_Options: Record<string, number>;
export declare const IPPROTO_TCP_Options: Record<string, number>;
