export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      subscribers: {
        Row: {
          id: number
          created_at: string
          email: string
          active: boolean
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_status: string | null
          current_period_end: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          email: string
          active?: boolean
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          current_period_end?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          email?: string
          active?: boolean
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          current_period_end?: string | null
        }
      }
      newsletters: {
        Row: {
          id: number
          created_at: string
          title: string
          content: string
          sent_at: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          content: string
          sent_at?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          content?: string
          sent_at?: string | null
        }
      }
    }
  }
}

