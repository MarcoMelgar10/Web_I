const AuthSystem = {
    storageKey: 'giveAHand_user',

    saveUser: function(user) {
        sessionStorage.setItem(this.storageKey, JSON.stringify(user));
    },

    getUser: function() {
        const userData = sessionStorage.getItem(this.storageKey);
        return userData ? JSON.parse(userData) : null;
    },

    login: function(email, password) {
        const users = {
            'admin@test.com': { password: 'admin123', name: 'Admin User', isAdmin: true },
            'user@test.com': { password: 'user123', name: 'Regular User', isAdmin: false }
        };

        const user = users[email];
        
        if (!user || user.password !== password) {
            return { success: false, message: 'Invalid credentials' };
        }

        const userData = {
            name: user.name,
            email: email,
            isAdmin: user.isAdmin,
            isAuthenticated: true
        };

        this.saveUser(userData);
        return { success: true, user: userData };
    },

    logout: function() {
        sessionStorage.removeItem(this.storageKey);
    },

    isAuthenticated: function() {
        const user = this.getUser();
        return user && user.isAuthenticated;
    }
};

window.auth = AuthSystem;