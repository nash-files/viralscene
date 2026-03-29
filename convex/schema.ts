import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    avatarUrl: v.string(),
    bio: v.string(),
    followers: v.number(),
    following: v.number(),
    coins: v.number(),
    verified: v.boolean(),
  }).index("by_username", ["username"]),

  creations: defineTable({
    userId: v.id("users"),
    prompt: v.string(),
    style: v.string(),
    videoUrl: v.string(),
    thumbnailUrl: v.string(),
    views: v.number(),
    likes: v.number(),
    comments: v.number(),
    isTemplate: v.boolean(),
  }).index("by_user", ["userId"]),

  challenges: defineTable({
    title: v.string(),
    description: v.string(),
    prizePool: v.number(),
    endTime: v.number(),
    imageUrl: v.string(),
    entryFee: v.number(),
  }),

  leaderboard: defineTable({
    userId: v.id("users"),
    points: v.number(),
    wins: v.number(),
    season: v.number(),
  }).index("by_points", ["points"]),
});
