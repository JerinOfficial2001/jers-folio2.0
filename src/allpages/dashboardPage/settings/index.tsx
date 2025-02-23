"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import GButton from "@/components/global/GButton";
import { logout } from "@/services/auth";
import { deleteAccount } from "@/services/user";
import { useFormDatatore } from "@/store/FormDataStore";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import {
  Avatar,
  Box,
  Dialog,
  Divider,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { MdEdit, MdLockReset } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const SettingsPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteText, setDeleteText] = useState("");

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };
  const { resetAllGlobalStore } = useGlobalStore();
  const { resetAllForm } = useFormDatatore();
  // Delete account mutation
  const { mutate: deleteAccountMutation, isPending } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      // Invalidate and refetch relevant queries
      queryClient.invalidateQueries({ queryKey: ["delete-account"] });

      // Clear auth data
      resetAllForm();
      resetAllGlobalStore();
      logout();
      // Show success message
      toast.success("Account deleted successfully");

      // Close dialog and reset state
      setShowDeleteConfirm(false);
      setDeleteText("");

      // Redirect to login
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete account");
      setDeleteText("");
    },
  });

  const handleDeleteAccount = () => {
    if (deleteText !== "DELETE") return;
    deleteAccountMutation();
  };

  return (
    <Stack
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        p: { xs: 2, md: 3 },
        gap: { xs: 3, md: 4 },
      }}
    >
      <PrimaryTypography name="Profile Settings" size="lg" />

      <Box
        sx={{
          bgcolor: "var(--secondary)",
          borderRadius: 2,
          p: { xs: 2, md: 4 },
        }}
      >
        {/* Profile Header */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={{ xs: 2, sm: 3 }}
          sx={{ mb: { xs: 3, md: 4 } }}
        >
          <Box sx={{ position: "relative" }}>
            <Avatar
              sx={{
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                bgcolor: "var(--primary)",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              JD
            </Avatar>
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                bgcolor: "var(--background)",
                border: "2px solid var(--secondary)",
                "&:hover": {
                  bgcolor: "var(--hover)",
                },
              }}
            >
              <MdEdit />
            </IconButton>
          </Box>
          <Stack spacing={1} alignItems={{ xs: "center", sm: "flex-start" }}>
            <PrimaryTypography name="John Doe" size="md" />
            <SecondaryTypography name="Administrator" />
            <SecondaryTypography name="john.doe@example.com" />
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 2, md: 3 }, borderColor: "var(--border)" }} />

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: "100%" }}
          >
            <GButton
              lable="Change Password"
              startIcon={<MdLockReset />}
              variant="outlined"
              onClickHandler={() => setShowPasswordForm(true)}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: "100%" }}
          >
            <GButton
              lable="Delete Account"
              startIcon={<RiDeleteBin6Line />}
              variant="error"
              onClickHandler={() => setShowDeleteConfirm(true)}
            />
          </motion.div>
        </Stack>

        {/* Modal Forms */}
        <AnimatePresence>
          {showPasswordForm && (
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Stack
                spacing={3}
                sx={{
                  mt: { xs: 3, md: 4 },
                  p: { xs: 2, md: 3 },
                  bgcolor: "var(--hover)",
                  borderRadius: 2,
                }}
              >
                <PrimaryTypography name="Change Password" size="md" />
                <SecondaryTypography name="This action cannot be undone. This will permanently delete your account and remove your data from our servers." />
                <Box
                  sx={{
                    ...flexStyle("row", "", "center", "flex-end"),
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                    width: "100%",
                  }}
                >
                  <GButton
                    lable="Cancel"
                    variant="outlined"
                    onClickHandler={() => {
                      setShowPasswordForm(false);
                      setShowDeleteConfirm(false);
                    }}
                  />
                  <GButton
                    lable={
                      showPasswordForm ? "Update Password" : "Delete Account"
                    }
                    variant={showPasswordForm ? "primary" : "error"}
                  />
                </Box>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>

      {/* Delete Account Dialog */}
      <Dialog
        open={showDeleteConfirm}
        onClose={() => {
          if (!isPending) {
            setShowDeleteConfirm(false);
            setDeleteText("");
          }
        }}
        PaperProps={{
          sx: {
            bgcolor: "var(--secondary)",
            borderRadius: 2,
            width: { xs: "90%", sm: "450px" },
            maxWidth: "500px",
          },
        }}
      >
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Stack
            spacing={3}
            sx={{
              p: { xs: 2, sm: 3 },
            }}
          >
            <PrimaryTypography
              name="Delete Account"
              size="md"
              sx={{ color: "var(--error)" }}
            />
            <SecondaryTypography
              name="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              sx={{
                color: "var(--text)",
                opacity: 0.9,
                fontWeight: 500,
              }}
            />
            <SecondaryTypography
              name='Please type "DELETE" to confirm.'
              sx={{
                color: "var(--text)",
                opacity: 0.8,
                fontWeight: 500,
              }}
            />
            <TextField
              value={deleteText}
              onChange={(e) => setDeleteText(e.target.value)}
              variant="outlined"
              placeholder='Type "DELETE"'
              disabled={isPending}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "var(--background)",
                  color: "var(--text)",
                  "& fieldset": {
                    borderColor: "var(--border)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--error)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--error)",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "var(--text)",
                  opacity: 0.5,
                },
              }}
            />
            <Box
              sx={{
                ...flexStyle("row", "", "center", "flex-end"),
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                width: "100%",
              }}
            >
              <GButton
                lable="Cancel"
                variant="outlined"
                onClickHandler={() => {
                  if (!isPending) {
                    setShowDeleteConfirm(false);
                    setDeleteText("");
                  }
                }}
                // disabled={isPending}
              />
              <GButton
                lable={isPending ? "Deleting..." : "Delete Account"}
                variant="error"
                // disabled={deleteText !== "DELETE" || isPending}
                onClickHandler={handleDeleteAccount}
              />
            </Box>
          </Stack>
        </motion.div>
      </Dialog>
    </Stack>
  );
};

export default SettingsPage;
