body {
  margin: 0;
  background: black;
  color: #0ff;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hologram-container {
  text-align: center;
  animation: pulse 3s infinite;
}

.wave-animation {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border: 2px solid #0ff;
  border-radius: 50%;
  animation: none;
}

.wave-animation.active {
  animation: wave 1s infinite;
}

#kaya-output {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #0ff;
}

#mic-button {
  background-color: transparent;
  border: 2px solid #0ff;
  padding: 10px 20px;
  color: #0ff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
}

@keyframes wave {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; }
}
