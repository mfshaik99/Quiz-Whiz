import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const BuiltByButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 px-3 py-1.5 text-xs font-medium rounded-md bg-muted text-muted-foreground hover:bg-muted/80 transition-colors z-40"
      >
        Built By
      </button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Built by Team Smart Minds</AlertDialogTitle>
            <AlertDialogDescription className="space-y-3 text-left">
              <div>
                <p className="font-semibold text-foreground">Muhammad Farhan Shaik</p>
                <p className="text-sm">Project Lead, System Architect</p>
                <p className="text-xs text-muted-foreground">Designed platform architecture, quiz logic, database structure, feature planning, and core implementation</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Artham Chirudeep</p>
                <p className="text-sm">Frontend Manager</p>
                <p className="text-xs text-muted-foreground">Worked on UI components, topic selection pages, and user interaction features</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Parre Sai Anurag</p>
                <p className="text-sm">Backend & Database Manager</p>
                <p className="text-xs text-muted-foreground">Managed question database, data organization, and quiz data handling</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
