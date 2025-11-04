import { google } from "googleapis";
import fs from "fs";
export const runtime = "nodejs";

function getCreds() {
  const raw = fs.readFileSync("./secrets.json", "utf8"); // path from project root
  const json = JSON.parse(raw);
  return { client_email: json.client_email, private_key: json.private_key };
}

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: getCreds(),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const res = await sheets.spreadsheets.get({ spreadsheetId: process.env.SHEET_ID });
    return Response.json({ ok: true, title: res.data.properties.title });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
    try {
      const data = await req.json();
  
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GS_CLIENT_EMAIL,
          private_key: process.env.GS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const sheets = google.sheets({ version: "v4", auth });
  
      // Map to your header order on the "Requests" tab
      const row = [
        new Date().toISOString(),
        data.areaToClean ?? "",
        data.name ?? "",
        data.email ?? "",
        data.phone ?? "",
        data.hearAboutUs ?? "",
        data.appointmentDate ?? "",
        data.address ?? "",
        data.city ?? "",
        data.province ?? "",
        data.postalCode ?? "",
        data.serviceType ?? "",
        data.houseType ?? "",
        data.condition ?? "",
        data.mainFloorBedrooms ?? "",
        data.mainFloorBathrooms ?? "",
        data.mainFloorCarpetCleaning ?? "",
        data.bedrooms ?? "",
        data.carpetCleaning ?? "",
        data.bathrooms ?? "",
        data.livingArea ?? "",
        data.kitchen ?? "",
        data.appliance ?? "",
        data.pets ?? "",
        data.comments ?? "",
        data.disclaimer ? "Yes" : "No",
      ];
  
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range: "Requests!A:Z",              // <-- tab name must match your sheet
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
  
      return Response.json({ ok: true });
    } catch (e) {
      console.error("Sheets append failed:", e?.response?.data || e);
      return Response.json({ ok: false, error: String(e) }, { status: 500 });
    }
  }