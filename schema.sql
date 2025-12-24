-- schema.sql
CREATE TABLE IF NOT EXISTS usage_control (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fp_id TEXT NOT NULL,
    user_ip TEXT,
    day_date TEXT NOT NULL,
    used_count INTEGER DEFAULT 1,
    UNIQUE(fp_id, day_date)
);

CREATE INDEX IF NOT EXISTS idx_fp_date ON usage_control (fp_id, day_date);