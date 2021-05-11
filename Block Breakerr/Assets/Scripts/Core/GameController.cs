using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour { 
    private void Awake() {
        var gameControllers = FindObjectsOfType<GameController>();
        if (gameControllers.Length > 1) {
            Destroy(gameObject);
        } else {
            DontDestroyOnLoad(gameObject);
        }
    } 
 
    public void LoadNextLevel() {
        FindObjectOfType<SceneLoader>().LoadNextScene();
    }
}
