using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    private void Awake() {
        GameController[] gameControllers = FindObjectsOfType<GameController>();
        if (gameControllers.Length > 1) {
            Destroy(gameObject);
        } else {
            DontDestroyOnLoad(gameObject);
        }
    } 
}
