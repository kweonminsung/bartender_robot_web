const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.json());

let orders = [];

// 주문 목록 조회
app.get("/orders", (req, res) => {
  res.json(orders);
});

// 주문 생성
app.post("/orders", (req, res) => {
  const order = req.body;
  order.id = Date.now().toString();
  order.timestamp = new Date();
  order.status = "pending";
  orders.unshift(order);
  res.status(201).json(order);
});

// 주문 상태 변경
app.patch("/orders/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = orders.find((o) => o.id === id);
  if (order) {
    order.status = status;
    res.json(order);
  } else {
    res.status(404).json({ error: "Order not found" });
  }
});

app.listen(port, () => {
  console.log(`Order server listening at http://localhost:${port}`);
});
