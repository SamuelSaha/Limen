# 🧠 10x PRD: **LIMEN (Solo Founder Protocol)**
*Human-matched housing options for uncertain travelers*

> **Version:** 1.0 (Concierge MVP)  
> **Owner:** Solo Founder  
> **Timeline:** 90 Days  
> **Budget:** <$5,000  
> **Mission:** Validate probabilistic housing demand without writing code.  
> **Constraint:** If it requires engineering, it doesn't ship in Phase 1.

---

## 🎯 Vision & North Star

| Element | Definition |
|---------|-----------|
| **Vision** | Prove humans will pay to keep travel options open before building the algorithm. |
| **North Star Metric** | **Verified Intent Locks** (Paid coordination fees collected) |
| **Why?** | Revenue validates value. Waitlists validate curiosity. Only paid locks validate the problem. |
| **Success Threshold** | 50 Paid Locks + 10 Completed Stays in 90 Days |

---

## 👥 User Jobs-To-Be-Done (Simplified)

### Traveler (The "Uncertain Nomad")
> *"I want to secure a home in Lisbon for June, but I don't know if my client project will finish. I'll pay €50 to hold the option, rather than risk losing €500 on a cancellation."*

### Host (The "Flexible Owner")
> *"I'm leaving Berlin for 3 weeks. I don't want the hassle of Airbnb cleaning/turnover. I'll accept a LIMEN match if the dates are flexible and the person is verified."*

### Founder (The "Algorithm")
> *"I manually match intent, collect fees, and learn why matches fail so I can automate later."*

---

## 🧩 The Product (Service Blueprint)

**There is no app.** The product is a **WhatsApp-mediated service** backed by a Stripe payment link.

### Core Flow (4 Steps)

```
1. INTAKE (Typeform)
   └─ User selects: [I want to Travel] OR [I want to Host]
   └─ Inputs: City, Date Range, Flexibility (± days), Budget
   └─ Output: Unique ID assigned (e.g., LIMEN-TRV-001)

2. VETTING (Manual)
   └─ Founder requests: LinkedIn Profile + ID Photo (via WhatsApp)
   └─ Founder checks: Social presence, reason for travel, vibe
   └─ Output: "Verified" badge granted (Manual flag in Airtable)

3. MATCHING (Founder Logic)
   └─ Founder scans Airtable for overlapping City/Date/Flex
   └─ Founder calculates "Fit Score" (Manual heuristic)
   └─ Output: Match Proposal sent via WhatsApp

4. SETTLEMENT (Stripe)
   └─ If both accept: Founder sends Stripe Payment Link (€50-€100)
   └─ Fee covers: Verification, Contract Template, Support
   └─ Output: Intro email sent, users coordinate directly
```

---

## ⚙️ Operations Manual (The "Algorithm")

**You are the matching engine.** Document every decision to train the future AI.

### Matching Heuristics (V1)
| Signal | Weight | Why |
|--------|--------|-----|
| **Flexibility Overlap** | 50% | If dates don't overlap ±3 days, no match. |
| **Verification Quality** | 30% | LinkedIn + ID + Video Intro = High Trust. |
| **Reciprocity** | 20% | Two-way swaps (Berlin↔Lisbon) prioritize over one-way. |

### Communication Templates (Copy/Paste)
```
TEMPLATE: Match Proposal
"Hi [Name], LIMEN found a potential match.
Host: [Name], Verified ✅, Location: [Lisbon]
Dates: [June 10-24] (Flexible ±3 days)
Fee: €50 (Non-refundable coordination fee)
Reply YES to proceed, NO to pass."

TEMPLATE: Payment
"Great. Here's your secure payment link: [Stripe]
Once paid, I'll send the Hospitality Exchange Agreement + Intro."
```

### Data Logging (Airtable Schema)
| Field | Type | Purpose |
|-------|------|---------|
| `User_ID` | Text | Unique identifier |
| `Intent_Type` | Select | Host / Travel |
| `Flexibility_Score` | Number | 1-10 (Manual assessment) |
| `Match_Status` | Select | Proposed / Accepted / Failed / Completed |
| `Failure_Reason` | Text | **Critical:** Why did it fail? (Price, Dates, Vibe) |
| `NPS_Score` | Number | Post-stay survey |

---

## 💰 Unit Economics (Solo V1)

**Pricing Strategy:** Tiered Coordination Fee (Static for MVP)

| Tier | Price | Conditions |
|------|-------|------------|
| **Standard** | €50 | ±3 Days Flexibility, Standard Verification |
| **Premium** | €100 | ±7 Days Flexibility, Priority Matching, Video Intro |
| **Swap** | €75 | Two-way exchange (Both host & travel) |

**Marginal Cost Per Transaction:**
- Stripe Fees: ~2% + €0.30
- Founder Time: 20 minutes (Target)
- Tools: ~€1.00 allocation (Typeform/Airtable)

**Breakeven:**
- Fixed Costs (Legal, Domain, Tools): ~€1,000
- Contribution Margin per Deal: ~€45
- ** Deals to Breakeven: 23 **

---

## ⚖️ Legal & Risk (Minimal Viable Posture)

**Structure:** Sole Proprietorship (Your Country)  
**Role:** Introduction Service Only (Not Broker, Not Landlord)

### Critical TOS Clauses
1.  **Service Definition:** "LIMEN provides introduction services only. We do not manage properties or bookings."
2.  **Fee Nature:** "Coordination Fees are for administrative work and are non-refundable regardless of stay outcome."
3.  **Liability:** "Members interact at their own risk. LIMEN is not liable for damage, injury, or disputes."
4.  **Insurance:** "Members must hold their own travel/property insurance. [Affiliate Link] provided for convenience."

### Safety Protocol
- **ID Verification:** Mandatory (Sumsub Free Tier or Manual Photo Check)
- **Deposit:** Users handle directly (Recommended €500 via Stripe Link generated by Founder)
- **Blacklist:** Shared internal list of banned users (GDPR compliant deletion on request)

---

## 📊 Metrics & Kill Switches (90-Day Sprint)

### Weekly Dashboard
| Metric | Target | Action if Missed |
|--------|--------|------------------|
| **Intake → Verified** | >50% | Vetting process too friction-heavy. Simplify. |
| **Verified → Match Proposal** | >40% | Supply/Demand imbalance. Pivot city pair. |
| **Proposal → Paid** | >30% | Price too high or value prop unclear. Adjust fee. |
| **Paid → Completed Stay** | >60% | Expectations mismatch. Improve screening. |

### Kill Switches (Stop Loss)
1.  **Day 30:** <10 Paid Locks → **Pivot Pricing or City**
2.  **Day 60:** <5 Completed Stays → **Pivot Model (Cash vs. Swap)**
3.  **Day 90:** <€2,000 Revenue → **Kill Project** (Cost of failure capped)

---

## 🧱 Tech Stack (No-Code Only)

| Function | Tool | Cost/Mo | Why |
|----------|------|---------|-----|
| **Landing Page** | Carrd | €19/year | Fast, clean, mobile-responsive |
| **Intake Form** | Typeform | €35 | Better UX than Google Forms, logic jumps |
| **Database** | Airtable | Free | Flexible, relational, easy to view |
| **Payments** | Stripe | 2.9% + €0.30 | Trusted, handles EU VAT automatically |
| **Comms** | WhatsApp Business | Free | High open rates, personal feel |
| **Contracts** | DocuSign Free | Free | Legally binding exchange agreement |
| **Automation** | Zapier (Optional) | Free | Typeform → Airtable only if needed |

**Total Monthly Burn:** ~€50 (excluding payment fees)

---

## 🗓️ 90-Day Execution Timeline

### Phase 1: Foundation (Days 1-14)
- [ ] Register Sole Proprietorship
- [ ] Draft TOS + Hospitality Agreement (Use LegalZoom + Lawyer Review)
- [ ] Setup Stripe + Airtable + Carrd
- [ ] **Goal:** 10 Founding Hosts recruited manually (LinkedIn/Network)

### Phase 2: First Intent (Days 15-45)
- [ ] Launch Landing Page
- [ ] Manual Outreach (DMs, Communities)
- [ ] Process First 20 Intent Locks
- [ ] **Goal:** €1,000 in Coordination Fees collected

### Phase 3: First Stays (Days 46-75)
- [ ] Facilitate First 5 Matches
- [ ] Monitor Stay Execution (Check-in/Check-out)
- [ ] Collect Testimonials + NPS
- [ ] **Goal:** 5 Completed Stays, 0 Major Disputes

### Phase 4: Decision (Days 76-90)
- [ ] Analyze Unit Economics + Failure Reasons
- [ ] Decide: Raise Pre-Seed / Pivot / Kill
- [ ] **Goal:** Investment Memo or Shutdown Plan

---

## ⚠️ Pre-Mortem (Why This Might Fail)

| Risk | Probability | Mitigation |
|------|------------|------------|
| **No Supply** | High | Focus on ONE city pair (e.g., Lisbon↔Berlin). Don't expand until liquid. |
| **Users Bypass** | Medium | Value is in *vetting* and *contract*, not just intro. Make bypass risky. |
| **Legal Scare** | Low | Clear TOS + No Fund Holding + Insurance Affiliate links. |
| **Founder Burnout** | Medium | Cap matches at 5/week. Quality over quantity. Automate only after pain is felt. |

---

## 🪄 The 10x Insight (Solo Edition)

> **You are not building a platform. You are building a dataset.**  
>  
> Every failed match teaches you why probabilistic housing is hard.  
> Every successful stay proves people value optionality.  
>  
> If you can make this work manually with WhatsApp and Airtable,  
> **then** you have the right to build the algorithm.  
>  
> If you can't make it work manually,  
> code won't save you.

---

## 🚦 Go/No-Go Checklist (Day 1)

- [ ] **Legal:** TOS reviewed by professional (€500 budget)
- [ ] **Bank:** Business account active + Stripe verified
- [ ] **Supply:** 5 Hosts verbally committed (Email confirmation)
- [ ] **Demand:** 10 Travelers on waitlist (Email confirmation)
- [ ] **Time:** 10 hours/week blocked for concierge ops
- [ ] **Mindset:** Willing to kill project if <23 deals in 90 days

**If any box unchecked → Do not launch.**

---

*This PRD is your contract with yourself.*  
*Execute ruthlessly. Measure honestly. Kill fast.*  
*The threshold awaits.* 🚪
