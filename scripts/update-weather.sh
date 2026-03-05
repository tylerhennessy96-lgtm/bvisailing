#!/bin/bash
# update-weather.sh — Fetch latest BVI marine weather and update app.js
# Runs twice daily via cron (6am, 6pm)

set -euo pipefail

PROJECT_DIR="/Users/tylerhennessy/bvisailing"
LOG_FILE="$PROJECT_DIR/scripts/logs/weather.log"
CLAUDE="/Users/tylerhennessy/.local/bin/claude"

echo "========================================" >> "$LOG_FILE"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting weather update" >> "$LOG_FILE"

cd "$PROJECT_DIR"

# Pull latest changes
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Pulling latest changes..." >> "$LOG_FILE"
git pull >> "$LOG_FILE" 2>&1

# Run claude in headless mode to update weather data
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running Claude to update weather..." >> "$LOG_FILE"
$CLAUDE -p "Search the web for the latest BVI marine weather forecast. Look for wind speed, wind direction, sea state, and temperature for the British Virgin Islands for the next 7-10 days. Then open app.js and update the weather data (wx object) for each day in the DAYS array with the latest forecast data. Only update days that haven't passed yet (today is $(date '+%Y-%m-%d')). Bump the cache version number. Commit and push the changes with message 'auto: update weather forecast'." --allowedTools 'Bash(git commit:*),Bash(git push:*),Edit,Read,WebSearch,WebFetch' >> "$LOG_FILE" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Weather update complete" >> "$LOG_FILE"
