// Initialize Passport and session
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Configure Local Strategy for username/password authentication
passport.use(new LocalStrategy(
    async(username, password, done) => {
        try {
            const user = await User.findOne({ username });

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));