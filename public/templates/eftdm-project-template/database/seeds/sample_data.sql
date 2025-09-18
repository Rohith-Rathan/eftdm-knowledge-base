-- Sample data for EFTDM Project
-- Insert initial users

-- Insert admin user
INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES
('admin@eftdm.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/8Kz8Kz2', 'Admin', 'User', 'admin');

-- Insert regular users
INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES
('user1@eftdm.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/8Kz8Kz2', 'John', 'Doe', 'user'),
('user2@eftdm.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/8Kz8Kz2', 'Jane', 'Smith', 'user');

-- Note: Password hash above is for 'password123' - change in production!
