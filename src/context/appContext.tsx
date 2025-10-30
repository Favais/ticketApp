import axios from "axios";
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";

// 1️⃣ Define the types for your context
interface AppContextType {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    tickets: any[];
    navigate: ReturnType<typeof useNavigate>;
    logOut: () => void
    addTicket: (ticket: any) => Promise<void>;
    editTicket: (id: string, ticket: any) => Promise<void>;
    deleteTicket: (id: string) => Promise<void>;
}

// 2️⃣ Create the context with proper typing (initially undefined)
const AppContext = createContext<AppContextType | undefined>(undefined);

// 3️⃣ Provider props type
interface AppWrapperProps {
    children: ReactNode;
}

// 4️⃣ Context Provider
export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [tickets, setTickets] = useState<any[]>([]);
    const backendUrl = "https://ticketapp-production-7ac6.up.railway.app";
    const navigate = useNavigate();

    const getTickets = async () => {
        try {
            const res = await axios.get(`${backendUrl}/tickets`);
            console.log(res.data);
            setTickets(res.data);
        } catch (error) {
            console.error("Failed to fetch tickets:", error);
        }
    };
    const addTicket = async (ticket: any) => {
        try {
            const res = await axios.post(`${backendUrl}/tickets`, ticket);
            console.log(res.data);
            // add created ticket to local state so pages update reactively
            setTickets(prev => [res.data, ...(prev ?? [])]);
            return res.data;
        } catch (error) {
            console.error("Failed to create ticket:", error);
            throw error;
        }
    }

    const editTicket = async (id: string, ticket: any) => {
        try {
            const res = await axios.put(`${backendUrl}/tickets/${id}`, ticket);
            setTickets(prev => prev.map(t =>
                t.id === id ? { ...res.data } : t
            ));
        } catch (error) {
            console.error("Failed to update ticket:", error);
            throw error;
        }
    };

    const deleteTicket = async (id: string) => {
        try {
            await axios.delete(`${backendUrl}/tickets/${id}`);
            // remove from local state so pages update reactively
            setTickets(prev => (prev ?? []).filter(t => String(t.id) !== String(id)));
        } catch (error) {
            console.error("Failed to delete ticket:", error);
            throw error;
        }
    }

    const logOut = () => {
        localStorage.removeItem('ticketapp_session');
        setUser(null);
        navigate("/auth/login");
    }

    useEffect(() => {
        getTickets();
    }, [user]);

    const value: AppContextType = {
        user,
        setUser,
        navigate,
        tickets,
        logOut,
        addTicket,
        editTicket,
        deleteTicket
    };

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
};

// 5️⃣ Custom hook with type safety
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppWrapper");
    }
    return context;
};
