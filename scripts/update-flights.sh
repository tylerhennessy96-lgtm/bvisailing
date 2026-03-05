#!/bin/bash
# update-flights.sh — Check flight statuses and update app.js
# Runs 4x daily via cron (6am, 12pm, 4pm, 8pm)

set -euo pipefail

PROJECT_DIR="/Users/tylerhennessy/bvisailing"
LOG_FILE="$PROJECT_DIR/scripts/logs/flights.log"
CLAUDE="/Users/tylerhennessy/.local/bin/claude"

echo "========================================" >> "$LOG_FILE"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting flight status update" >> "$LOG_FILE"

cd "$PROJECT_DIR"

# Pull latest changes
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Pulling latest changes..." >> "$LOG_FILE"
git pull >> "$LOG_FILE" 2>&1

# Run claude in headless mode to update flight statuses
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running Claude to check flight statuses..." >> "$LOG_FILE"
$CLAUDE -p "Search the web for the current status of these flights: BA207 LHR to MIA on March 7 2026, AA Envoy MIA to EIS on March 7 2026, AA Envoy EIS to MIA on March 15 2026, BA206 MIA to LHR on March 15 2026. Update the flight status data in app.js — change any status from 'Scheduled' to 'On Time', 'Delayed', or 'Cancelled' based on what you find. Update the FLIGHT_STATUS_UPDATED variable in app.js to the current date and time ($(date '+%Y-%m-%d %H:%M')). Bump the cache version number. Only check flights that are within 48 hours of departure (current time: $(date '+%Y-%m-%d %H:%M %Z')). If no flights are within 48 hours, just log that and skip. Commit and push with message 'auto: update flight status'." --allowedTools 'Bash(git commit:*),Bash(git push:*),Edit,Read,WebSearch,WebFetch' >> "$LOG_FILE" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Flight status update complete" >> "$LOG_FILE"
