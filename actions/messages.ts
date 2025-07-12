"use server"

import {ContactForm} from "@/components/pages/home/contact";
import admin from "@/libs/admin";

export interface MessageData extends ContactForm {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  message: string;
  status: "unread";
  createdAt: string;
  readAt?: string;
  repliedAt?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'message' | 'system';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'unread' | 'read' | 'archived';
  createdAt: string;
  readAt?: string;
  archivedAt?: string;
  source: {
    type: 'contact_form' | 'gallery_upload' | 'system' | 'user_action' | 'error';
    sourceId?: string; // Reference to related entity (message ID, user ID, etc.)
  };
}

function generateNotificationID(): string {
  const random = Math.floor(Math.random() * 100000 + 1);
  return `notif-${random}`
}

function generateMessageID(): string {
  const random = Math.floor(Math.random() * 100000 + 1);
  return `msg-${random}`
}

export const sendMessage = async (data: MessageData) => {

  const notificationId = generateNotificationID();
  const messageId = generateMessageID();

  await admin.firestore().collection("messages").doc(messageId).set({ id: messageId, ...data })
  await admin
    .firestore()
    .collection("notifications")
    .doc(notificationId)
    .set({
      id: notificationId,
      title: data.projectType,
      message: `One new message from ${data.fullName}`,
      type: "message",
      priority: "urgent",
      status: 'unread',
      createdAt: new Date().toISOString(),
      readAt: "",
      source: {
        type: 'contact_form',
        sourceId: messageId
      }
    });
}