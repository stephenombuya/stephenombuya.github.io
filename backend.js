import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Signup Functionality
document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Signup successful! Check your email to confirm.");
});

// Login Functionality
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else {
        alert("Login successful!");
        window.location.href = "/index.html";
    }
});

// Track Visits
async function trackVisit() {
    const { error } = await supabase.from('visits').insert([{ timestamp: new Date() }]);
    if (error) console.error(error.message);
}
trackVisit();
