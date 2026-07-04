import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/checkout", async (req, res) => {
    try {
      const { amount, source } = req.body;
      if (!amount || isNaN(Number(amount))) {
        return res.status(400).json({ error: "Invalid amount" });
      }

      const stripeKey = process.env.STRIPE_SECRET_KEY;
      if (!stripeKey) {
        throw new Error("STRIPE_SECRET_KEY environment variable is required");
      }

      const stripe = new Stripe(stripeKey);

      const baseUrl = process.env.APP_URL || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      
      let successUrl = `${baseUrl}/?session=success`;
      let cancelUrl = `${baseUrl}/?session=cancel`;

      if (source && typeof source === 'string') {
        successUrl = `https://${source}.ruralopstools.com?session=success`;
        cancelUrl = `https://${source}.ruralopstools.com?session=cancel`;
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "link"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Support RuralOpsTools",
                description: "Contribution to keep open-source tools running",
              },
              unit_amount: Math.round(Number(amount) * 100), // convert dollars to cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${baseUrl}/?session=success`,
        cancel_url: `${baseUrl}/?session=cancel`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Stripe error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        throw new Error("WEB3FORMS_ACCESS_KEY environment variable is required");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        res.json({ success: true });
      } else {
        res.status(400).json({ error: result.message || "Failed to send message" });
      }
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
