import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private boolean[][] percolationGrid;
    private WeightedQuickUnionUF wquf;
    private int size;
    private int openSites = 0;
    private final int virtualTop = 0;
    private int virtualBottom;

    public Percolation(int n) {
        if (n <= 0) {
            throw new IllegalArgumentException("N must be > 0.");
        }
        size = n;
        virtualBottom = size * size + 1;
        percolationGrid = new boolean[size][size];
        for (int i = 0; i < percolationGrid.length; i++) {
            percolationGrid[i][i] = false;
        }
        wquf = new WeightedQuickUnionUF(size * size + 2);
    }


    public void open(int row, int col) {
        if (row < 1 || row > size || col < 1 || col > size) {
            throw new IllegalArgumentException("Row and column must be between 1 and " + size);
        }
        if(!isOpen(row,col)) {
            percolationGrid[row - 1][col - 1] = true;
            openSites++;
            //top row
            if (row == 1) {
                wquf.union(xyToArrayIndex(row, col), virtualTop);
            }
            //bottom row
            if (row == size) {
                wquf.union(xyToArrayIndex(row, col), virtualBottom);
            }
            //connect left
            if (col != 1 && isOpen(row, col - 1)) {
                wquf.union(xyToArrayIndex(row, col), xyToArrayIndex(row, col - 1));
            }

            //connect right
            if (col != size && isOpen(row, col + 1)) {
                wquf.union(xyToArrayIndex(row, col), xyToArrayIndex(row, col + 1));
            }
            //connect top
            if (row != 1 && isOpen(row - 1, col)) {
                wquf.union(xyToArrayIndex(row, col), xyToArrayIndex(row - 1, col));
            }
            //connect bottom
            if (row != size && isOpen(row + 1, col)) {
                wquf.union(xyToArrayIndex(row, col), xyToArrayIndex(row + 1, col));
            }
        }
    }

    public boolean isOpen(int row, int col) {
        if (row < 1 || row > size || col < 1 || col > size) {
            throw new IllegalArgumentException("Row and column must be between 1 and " + size);
        }
        return percolationGrid[row - 1][col - 1];
    }

    public boolean isFull(int row, int col) {
        if (row < 1 || row > size || col < 1 || col > size) {
            throw new IllegalArgumentException("Row and column must be between 1 and " + size);
        }
        return wquf.connected(xyToArrayIndex(row, col), virtualTop);
    }

    public int numberOfOpenSites() {
        return openSites;
    }


    public boolean percolates() {
        return wquf.connected(virtualTop, virtualBottom);
    }


    public static void main(String[] args) {
        Percolation p = new Percolation(3);
        while (!p.percolates()) {
            int row = StdRandom.uniform(3) + 1;
            int col = StdRandom.uniform(3) + 1;
            if (!p.isOpen(row, col)) {
                p.open(row, col);
            }
        }
        System.out.println("");
    }

    private int xyToArrayIndex(int row, int column) {
        return ((row - 1) * size) + (column);
    }
}
