import json
import os
import unittest

class TestAioFsync(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_aio_fsync_op.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_fsync(self):
        self.assertEqual(self.data['AIO_SYNC_DATA'], 1)
        self.assertEqual(self.data['AIO_SYNC_ALL'], 2)

if __name__ == '__main__':
    unittest.main()
