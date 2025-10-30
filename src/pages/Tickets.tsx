import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppContext } from "@/context/appContext";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from "sonner";

export type TicketStatus = "open" | "in_progress" | "closed";

type formData = {
    title: "",
    description: "",
    status: "open" | "in_progress" | "closed"
}

const Tickets = () => {
    const { tickets, addTicket, editTicket, deleteTicket } = useAppContext()
    const { register, setValue, handleSubmit, watch, reset, formState: { errors } } = useForm()
    const status = watch("status"); // Watch the current value
    const [selectedTicket, setSelectedTicket] = useState(null)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [ticketToDelete, setTicketToDelete] = useState<string | null>(null);

    const openCreateModal = () => {
        reset({
            title: "",
            description: "",
            status: "open"
        })
        setIsCreateModalOpen(true)
    }

    const openEditModal = (ticket: FormData) => {
        setIsEditModalOpen(true)
        reset(ticket)


    }


    const onEditSubmit = async (data: formData) => {
        console.log(data);

        try {
            await editTicket(String(data.id), data)
            // close modal and reset form
            setIsEditModalOpen(false)
            setSelectedTicket(null)
            reset({
                title: "",
                description: "",
                status: "open"
            })
        } catch (err) {
            console.error("Failed to edit ticket:", err)
        }
    }

    const onCreateSubmit = (data: formData) => {

        const ticket = {
            id: String(tickets.length + 1),
            ...data,
            createdAt: new Date().toISOString()

        }
        addTicket(ticket)
        reset({
            title: "",
            description: "",
            status: "open"
        })
        setIsCreateModalOpen(false)
    }

    const onDeleteConfirm = (ticketToDelete) => {
        if (!ticketToDelete) return;
        deleteTicket(String(ticketToDelete))

        toast.success("Ticket deleted successfully");
        setTicketToDelete(null);
    }
    console.log(ticketToDelete);


    const getStatusBadge = (status: TicketStatus) => {
        const variants: Record<TicketStatus, { className: string; label: string }> = {
            open: { className: "bg-sky-100 text-sky-700 hover:bg-sky-100", label: "Open" },
            in_progress: { className: "bg-amber-100 text-amber-700 hover:bg-amber-100", label: "In Progress" },
            closed: { className: "bg-slate-100 text-slate-700 hover:bg-slate-100", label: "Closed" },
        };

        return (
            <Badge className={`${variants[status].className} rounded-lg px-3 py-1`}>
                {variants[status].label}
            </Badge>
        );
    };
    return (
        <div>
            <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                    <div>
                        <h1 className="mb-2">Ticket Management</h1>
                        <p className="text-muted-foreground">
                            Create, view, and manage support tickets
                        </p>
                    </div>
                    <Button
                        onClick={openCreateModal}
                        className="bg-sky-600 hover:bg-sky-700 text-white rounded-xl"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Ticket
                    </Button>
                </div>

                {/* Tickets Grid */}
                {tickets.length === 0 ? (
                    <Card className="rounded-2xl shadow-lg border-0 p-12 text-center">
                        <p className="text-muted-foreground mb-4">No tickets yet</p>
                        <Button
                            onClick={openCreateModal}
                            variant="outline"
                            className="rounded-xl"
                        >
                            Create your first ticket
                        </Button>
                    </Card>
                ) : (
                    <div className="grid gap-6">
                        {tickets.map((ticket) => (
                            <Card key={ticket.id} className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4 mb-3">
                                                <h3 className="flex-1">{ticket.title}</h3>
                                                {getStatusBadge(ticket.status)}
                                            </div>
                                            <p className="text-muted-foreground mb-3">{ticket.description}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Created: {new Date(ticket.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="flex lg:flex-col gap-2">
                                            <Button
                                                onClick={() => openEditModal(ticket)}
                                                variant="outline"
                                                size="sm"
                                                className="rounded-xl flex-1 lg:flex-none"
                                            >
                                                <Edit className="w-4 h-4 mr-2" />
                                                Edit
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setTicketToDelete(ticket.id);
                                                    setIsDeleteDialogOpen(true);
                                                }}
                                                variant="outline"
                                                size="sm"
                                                className="rounded-xl text-destructive hover:bg-destructive hover:text-destructive-foreground flex-1 lg:flex-none"
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Create/Edit Modal */}
                <Dialog open={isCreateModalOpen || isEditModalOpen} onOpenChange={(open) => {
                    if (!open) {
                        setIsCreateModalOpen(false);
                        setIsEditModalOpen(false);
                        // setSelectedTicket(null);
                        // resetForm();
                    }
                }}>
                    <DialogContent className="sm:max-w-[500px] rounded-2xl">
                        <DialogHeader>
                            <DialogTitle>
                                {isCreateModalOpen ? "Create New Ticket" : "Edit Ticket"}
                            </DialogTitle>
                            <DialogDescription>
                                {isCreateModalOpen
                                    ? "Fill in the details to create a new support ticket"
                                    : "Update the ticket information"}
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={isCreateModalOpen ? handleSubmit(onCreateSubmit) : handleSubmit(onEditSubmit)} className="space-y-6 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Brief description of the issue"
                                    {...register('title', { required: "Title is required", minLength: { value: 3, message: "Title must be at least 3 characters" } })}
                                    className={`rounded-xl ${errors.title ? 'border-destructive' : ''}`}
                                />
                                {errors.title && (
                                    <p className="text-sm text-destructive">{String(errors.title.message)}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Provide detailed information about the issue"
                                    {...register('description', { required: true, minLength: { value: 10, message: "Title must be at least 10 characters" } })}
                                    className={`rounded-xl min-h-[120px] ${errors.description ? 'border-destructive' : ''}`}
                                />
                                {errors.description?.message && (
                                    <p className="text-sm text-destructive">{String(errors.description.message)}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    onValueChange={(value) => setValue("status", value)}
                                    value={status}
                                    {...register('status', { required: true })}
                                >
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="open">Open</SelectItem>
                                        <SelectItem value="in_progress">In Progress</SelectItem>
                                        <SelectItem value="closed">Closed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setIsCreateModalOpen(false);
                                        setIsEditModalOpen(false);
                                        // setSelectedTicket(null);
                                        // resetForm();
                                    }}
                                    className="flex-1 rounded-xl"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="button"
                                    onClick={isCreateModalOpen ? handleSubmit(onCreateSubmit) : handleSubmit(onEditSubmit)}
                                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white rounded-xl"
                                >
                                    {isCreateModalOpen ? "Create Ticket" : "Save Changes"}
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Delete Confirmation Dialog */}
                <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                    <AlertDialogContent className="rounded-2xl">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the ticket.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={() => deleteTicket(ticketToDelete)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl"
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </main>
        </div>
    )
}

export default Tickets