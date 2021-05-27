using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour {
    [SerializeField] Vector2 bounds = new Vector2(-6.5f, 6.5f);
    [SerializeField] bool autoPlay = false;
    [SerializeField] Ball ball; 
    private Animator animator;
    private void Start() { 
        animator = GetComponent<Animator>();
    }
    private void Update() {
        if (!autoPlay) {
            var mousePos = Input.mousePosition; 
            mousePos = Camera.main.ScreenToWorldPoint(mousePos);
            transform.position = new Vector3(Mathf.Clamp(mousePos.x, bounds.x, bounds.y), transform.position.y, 0f);
        } else {
            transform.position = new Vector3(Mathf.Clamp(ball.transform.position.x, bounds.x, bounds.y), transform.position.y, 0f);
        }
    }

    private void OnTriggerEnter2D(Collider2D collider) {
        if (collider.gameObject.CompareTag("Ball")) { 
            animator.SetTrigger("Bounce");
        }
    } 
}
