import json
import os
import unittest

class TestPeereid(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'socket_credentials_peereid.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_peereid(self):
        self.assertEqual(self.data['function'], "getpeereid")
        self.assertTrue(self.data['requires_stream_socket'])

if __name__ == '__main__':
    unittest.main()
