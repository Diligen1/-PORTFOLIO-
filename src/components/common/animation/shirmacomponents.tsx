"use client";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Shirma from "./shirma";
import Layout from "../../../app/layout";
import { Component } from "react";
export default function ShirmaComponent() {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Shirma />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
