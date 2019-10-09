<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int             $id
 * @property int             $document_id
 * @property string          $filename
 * @property string          $path
 * @property string          $size
 * @property string          $created_at
 * @property string          $updated_at
 * @property string          $deleted_at
 */
class File extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'files';

    /**
     * @var array
     */
    protected $fillable = [
        'document_id',
        'filename',
        'path',
        'size',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function document()
    {
        return $this->belongsTo('App\Models\Document', 'document_id', 'id');
    }
}
