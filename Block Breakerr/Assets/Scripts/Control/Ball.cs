using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour { 
    [SerializeField] Paddle paddle;
    [SerializeField] float launchSpeed;
    [SerializeField] float launchDirection;
    [SerializeField] float yOffset = 0.2f;
    private Rigidbody2D rigidbody;
    private TrailRenderer trail;
    private bool launched = false;
    private void Start() {
        rigidbody = GetComponent<Rigidbody2D>();
        trail = GetComponent<TrailRenderer>();
    } 
 
    void Update() {
        if (!launched) {
            if (Input.GetMouseButtonDown(0)) {
                launched = true;
                rigidbody.velocity = new Vector2(launchDirection, launchSpeed);
                trail.enabled = true;
            } else 
                transform.position = new Vector3(paddle.transform.position.x, paddle.transform.position.y + yOffset, 0f);
        }
    }
}
